import React from 'react';

export default class Posts extends React.Component{

    render(){

        return (
            <div>
                {this.props.posts.map((post, index) => {
                    return (
                        <header className="post" key={index}>
                            <img className="postPic" src={post.pic}></img>
                            <h1 className="postTitle">{post.title}</h1>
                            <a href={post.link}><p><button className="postCTA">Read More ></button></p></a>
                        </header>
                    );
                })}
            </div>
        )
    }
}