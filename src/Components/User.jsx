import React from "react";
// Creating a class user Component
class User extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            repoInfo: [],
          };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ayushi8757");
        const json = await data.json();
        console.log(json);
        this.setState({
            repoInfo: json,
          });
      }
    render(){
        const {name,id}=this.state.repoInfo;
        return(
           
            <div>
                <h2>Name:{name}</h2>
                         <h3>{id}</h3>
            </div>
        )
    }

}
export default User;