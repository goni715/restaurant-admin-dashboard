import EditorLoading from "../../components/Loader/EditorLoading";
import { useGetPolicyByTypeQuery } from "../../redux/features/policy/policyApi";
import CreateAboutUs from "../../components/policy/CreateAboutUs";
import UpdateAboutUs from "../../components/policy/UpdateAboutUs";


const AboutUsPage = () => {
 const { data, isLoading, isSuccess, error} = useGetPolicyByTypeQuery("about-us");
 const about = data?.data;

 if(isLoading){
  return <EditorLoading/>
 }
 if(!isLoading && error && error?.data?.message === "Policy Not Found"){
  return <CreateAboutUs/>
 }
 
 if(!isLoading && isSuccess && about?._id){
   return <UpdateAboutUs content={about?.content}/>
 }
 
};

export default AboutUsPage;
