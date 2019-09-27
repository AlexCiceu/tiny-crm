import React, {Component} from 'react';
import axios from 'axios';
    
    
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], loading: true, postTitle: '', postBody: ''}
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.postReview = this.postReview.bind(this);

    }
    
    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(`http://localhost:8000/api/reviews`).then(posts => {
            this.setState({ posts: posts.data, loading: false})
        })
     }

    postReview(){
        axios.post('http://localhost:8000/api/post_review', {
            title: this.state.postTitle,
            body: this.state.postBody
        },{
            'Content-Type': 'application/x-www-form-urlencoded'
        }).then(function(response){
            window.location.reload();
            console.log('This shit finally worked')
        });
    }

    handleTitle(event){
        this.setState({postTitle: event.target.value})
    }
    handleBody(event){
        this.setState({postBody: event.target.value})
    }
    
    render() {
        const loading = this.state.loading;
        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of reviews</span></h2>
                        </div>

                        <div className={'row'}>
                                <div className="col-md-10 offset-md-1 row-block" >
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <form>
                                                            <h4>{'Book Title'}</h4>
                                                            <input type='text' onChange={this.handleTitle}/>
                                                            <h4>{'Your review'}</h4>
                                                            <input type='text' onChange={this.handleBody}/>
                                                            <div className="media-right align-self-center">
                                                                <button onClick={this.postReview}>Post review</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
    
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
    
                        ) : (
                            
                            <div className={'row'}>
                                {this.state.posts.map(post =>
                                    <div className="col-md-10 offset-md-1 row-block" key={post.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h4>{post.title}</h4>
                                                        <p>{post.body}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
    
export default Reviews;