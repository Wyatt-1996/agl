import React from 'react';

export default class Posts extends React.Component{

    render(){

        return (
            <div>
                {this.props.posts.map((post, index) => {
                    return (
                        <header className="post">
                            <img className="post-pic" src={post.pic}></img>
                            <h1 className="post-title">{post.title}</h1>
                            <a href={post.link}><p><button className="post-cta">Read More ></button></p></a>
                        </header>
                    );
                })}
            </div>
        )
    }
}