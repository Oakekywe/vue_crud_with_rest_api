import axios from "axios";
import { ref } from "vue"
import { useRouter } from "vue-router";

axios.defaults.baseURL= "http://localhost:8000/api/v1/"

export default function useSkill(){
    
    const skills= ref([]);
    const skill = ref([]);
    const errors = ref([]);
    const router = useRouter();

    // all skills
    const getSkills= async() =>{
        const response= await axios.get("skills");
        console.log(response);
        skills.value= response.data.data;
    };
    // single skill
    const getSkill= async(id) =>{
        const response= await axios.get("skills/"+ id);
        skill.value= response.data.data;
    }
    //store skill
    const storeSkill= async(data) =>{
        try {
            await axios.post("skills", data);
            await router.push({name: "SkillIndex"});
        } 
        catch (error) {
            if(error.response.status === 422){
                errors.value= error.response.data.errors;
            }
        }
    }
    //update skill
    const updateSkill= async(id) =>{
        try {
            await axios.put("skills/"+ id, skill.value);
            await router.push({name: "SkillIndex"});
        } 
        catch (error) {
            if(error.response.status === 422){
                errors.value= error.response.data.errors;
            }
        }
    }
    //destroy skill
    const destroySkill= async(id) =>{
        if (!window.confirm("Are You Sure?")) {
           return;
        }
        await axios.delete("skills/"+ id, skill.value);
        await getSkills();
    }



    return {
        skill,
        skills,
        getSkill,
        getSkills,
        storeSkill,
        updateSkill,
        destroySkill,
        errors
    }
}