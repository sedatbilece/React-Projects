import { useEffect ,useState } from "react";



function Api(){

    const [users, setUsers] = useState([]);

useEffect(()=>{
    console.log("comp yüklendi")


    
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => setUsers(data));

const formData =new FormData();
formData.append("UserId",1);
formData.append("title","title1");
formData.append("body","body1");
  addPost({
    method: "POST",
    body:formData
  })
 
},[])   


const addPost = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data));
}

    return (<div>
        <ul>
             {
                  users.map((user)=>{

                    return <li key={user.id}>{user.name}</li>
                })
             }
             </ul>
    </div>)
}


export default Api;