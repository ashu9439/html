'''LLMManager class for managing LLM models'''
import pandas as pd
from bpmtree.util.treefilepath import BPMFilePath
from coreengine.embedding.azureembedding import AzureEmbedding
from coreengine.embedding.utils import cosine_similarity

class PickleFileSearch:
    '''Class for Generating BPM Diagrams in mermaid'''

    def __init__(
            self,
            industry,
            ):
        self.industry = industry
        bpmfilepath = BPMFilePath(industry)
        self.indexfile_location = bpmfilepath.get_indexfile_location()
        print(self.indexfile_location)

    def get_business_context(
            self,
            scopevision,
            n=3
            ):
        '''Function to take user query and use semantic search to 
        find the top n most similar business contexts.

        Args:
            scopevision (str): The user query to search for.
            n (int): The number of top similar business contexts to return.

        Returns:
            str: A string containing the top n most similar business contexts.
        '''

        bcdf = pd.read_pickle(self.indexfile_location)
        embeddingobject = AzureEmbedding()
        search_term_vector = embeddingobject.get_embedding(scopevision)

        bcdf["similarities"] = bcdf['embedding'].apply(
            lambda x: cosine_similarity(x, search_term_vector)
        )
        res = bcdf.sort_values("similarities", ascending=False).head(n)
        res = res[res['similarities'] > 0.70]
        businesscontext = ""
        for i in range(len(res)):
            concattext = ""
            l1title = res.iloc[i]['l1title']
            l1description = res.iloc[i]['l1description']
            l2title = res.iloc[i]['l2title']
            l2description = res.iloc[i]['l2description']
            l3title = res.iloc[i]['l3title']
            l3description = res.iloc[i]['l3description']
            l4title = res.iloc[i]['l4title']
            l4description = res.iloc[i]['l4description']
            workflow = res.iloc[i]['workflow']
            workflowdescription = res.iloc[i]['workflowdescription']

            concattext = f"Business Domain: {l1title} - {l1description}\n"
            concattext += f"Business Sub Domain: {l2title} - {l2description}\n"
            concattext += f"Business Capability: {l3title} - {l3description}\n"
            concattext += f"Business Sub Capability: {l4title} - {l4description}\n"
            concattext += f"Workflow: {workflow} - {workflowdescription}\n"
            concattext += "~"
            score = res.iloc[i]['similarities']
            score = round(score, 4)
            score = score * 100
            concattext += f"Similarity Score: {score} %\n"
            concattext += "|"

            # businesscontext += res.iloc[i]['combinedbusinesscontext'] + "\n"
            businesscontext += concattext

        return businesscontext
