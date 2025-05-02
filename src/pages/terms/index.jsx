import EditorLoading from "../../components/Loader/EditorLoading";
import { useGetPolicyByTypeQuery } from "../../redux/features/policy/policyApi";
import UpdateTermsCondition from "../../components/policy/UpdateTermsCondition";
import CreateTermsCondition from "../../components/policy/CreateTermsCondition";


const TermsConditionPage = () => {
 const { data, isLoading, isSuccess, error} = useGetPolicyByTypeQuery("terms-condition");
 const terms = data?.data;

 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && error?.data?.message === "Policy Not Found"){
  return <CreateTermsCondition/>
 }
 
 if(!isLoading && isSuccess && terms?._id){
   return <UpdateTermsCondition content={terms?.content}/>
 }
 
};

export default TermsConditionPage;
