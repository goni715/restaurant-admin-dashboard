import EditorLoading from "../../components/Loader/EditorLoading";
import { useGetPolicyByTypeQuery } from "../../redux/features/policy/policyApi";
import UpdatePrivacyPolicy from "../../components/policy/UpdatePrivacyPolicy";
import CreatePrivacyPolicy from "../../components/policy/CreatePrivacyPolicy";


const PrivacyPolicyPage = () => {
  const { data, isLoading, isSuccess, error} = useGetPolicyByTypeQuery("privacy-policy");
  const privacy = data?.data;

 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && error?.data?.message === "Policy Not Found"){
  return <CreatePrivacyPolicy/>
 }
 
 if(!isLoading && isSuccess && privacy?._id){
   return <UpdatePrivacyPolicy content={privacy?.content}/>
 }
 
};

export default PrivacyPolicyPage;
