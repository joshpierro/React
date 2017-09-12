import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


let data = [{
    "login": "joshpierro",
    "id": 2328959,
    "avatar_url": "https://avatars3.githubusercontent.com/u/2328959?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/joshpierro",
    "html_url": "https://github.com/joshpierro",
    "followers_url": "https://api.github.com/users/joshpierro/followers",
    "following_url": "https://api.github.com/users/joshpierro/following{/other_user}",
    "gists_url": "https://api.github.com/users/joshpierro/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/joshpierro/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/joshpierro/subscriptions",
    "organizations_url": "https://api.github.com/users/joshpierro/orgs",
    "repos_url": "https://api.github.com/users/joshpierro/repos",
    "events_url": "https://api.github.com/users/joshpierro/events{/privacy}",
    "received_events_url": "https://api.github.com/users/joshpierro/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Josh Pierro",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 30,
    "following": 83,
    "created_at": "2012-09-12T03:34:04Z",
    "updated_at": "2017-08-29T16:52:40Z"
},
    {
        "login": "dested",
        "id": 822784,
        "avatar_url": "https://avatars3.githubusercontent.com/u/822784?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/dested",
        "html_url": "https://github.com/dested",
        "followers_url": "https://api.github.com/users/dested/followers",
        "following_url": "https://api.github.com/users/dested/following{/other_user}",
        "gists_url": "https://api.github.com/users/dested/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/dested/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/dested/subscriptions",
        "organizations_url": "https://api.github.com/users/dested/orgs",
        "repos_url": "https://api.github.com/users/dested/repos",
        "events_url": "https://api.github.com/users/dested/events{/privacy}",
        "received_events_url": "https://api.github.com/users/dested/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Salvatore",
        "company": "Dested LLC",
        "blog": "https://dested.com",
        "location": "Phoenix",
        "email": null,
        "hireable": true,
        "bio": "Javascript Architect, C# Zealot, Aspiring Game Developer",
        "public_repos": 79,
        "public_gists": 15,
        "followers": 35,
        "following": 43,
        "created_at": "2011-06-01T10:37:45Z",
        "updated_at": "2017-09-05T16:35:43Z"
    }]


class App extends Component {
    render() {
        return (
            <div className="App">
                <CardList cards={data}>
                </CardList>
            </div>
        );
    }
}



const Card = (props)=> {
    return (
        <div style={{margin:'1em'}}>
            <img width="75" src={props.avatar_url}/>
            <div style={{display:'inline-block',marginLeft:10}}>
                <div style={{fontSize: '1.25em',fontWeight:'bold'}}>
                    {props.name}
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    )
}


const CardList =(props)=>{
    console.log(props)
    return(
        <div>
            {props.cards.map(card=><Card {...card} key={card.id} />)}
        </div>
    )
}





export default App;
