import {useEffect,useState} from "react";
import ProjectModal from "../components/ProjectModal";


export default function Portfolio(){


const [repos,setRepos]=useState([]);

const [loading,setLoading]=useState(true);

const [selectedRepo,setSelectedRepo]=useState(null);



const username="AidaDehdastt";


useEffect(()=>{


async function getRepos(){


try{


const response=
await fetch(
`https://api.github.com/users/${username}/repos`
);


const data=
await response.json();


setRepos(data);


}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}


}


getRepos();


},[]);



const allowedRepos=[
"Anropa-Databas",
"BankApp",
"REST-API"
];



return (

<>


<h1>
Portfolio
</h1>



{loading && 
<p>
Laddar projekt...
</p>
}



<ul>

{repos
.filter(repo=>allowedRepos.includes(repo.name))
.map(repo=>(


<li key={repo.id}>


<h3>
{repo.name}
</h3>


<button
onClick={()=>setSelectedRepo(repo)}
>
Läs mer
</button>


</li>


))}


</ul>



{selectedRepo &&

<ProjectModal

repo={selectedRepo}

close={()=>
setSelectedRepo(null)
}

/>

}


</>

)

}