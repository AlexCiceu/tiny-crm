import React, {Component} from 'react';
import axios from 'axios';
    
class Books extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [], loading: true, bookTitle: '', bookAuthor: '', bookDescription: '', bookUrl: ''};
        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.insertBook = this.insertBook.bind(this);
    
    }
    
    componentDidMount() {
        this.getBooks();
    }

    handleTitle(event){
        this.setState({bookTitle: event.target.value})
    }
    handleAuthor(event){
        this.setState({bookAuthor: event.target.value})
    }
    handleDescription(event){
        this.setState({bookDescription: event.target.value})
    }
    handleUrl(event){
        this.setState({bookUrl: event.target.value})
    }
    
    getBooks() {
       axios.get(`http://localhost:8000/api/books`).then(books => {
           this.setState({ books: books.data, loading: false})
       })
    }

    insertBook(){
        axios.post('http://localhost:8000/api/insert_books', {
            name: this.state.bookTitle,
            author: this.state.bookAuthor,
            description: this.state.bookDescription,
            imageURL: this.state.bookUrl
        },{
            'Content-Type': 'application/x-www-form-urlencoded'
        }).then(function(response){
            window.location.reload();
            console.log('This shit finally worked')
        });
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of books</span></h2>
                        </div>
                        <div className="col-md-10 offset-md-1 row-block">
                            <form>
                            <div class='media'>
                                <div className="media-left align-self-center">
                                    <img className="rounded-circle"
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6G0P3qiNLxphD_scyvciRqhzfHvxro1_Gl5TQVRtz9TkRIz9'/>
                                </div>
                                <div className="media-body">
                                    <h4>Book title</h4>
                                    <input type='text' onChange={this.handleTitle}/>
                                    <h4>Author</h4>
                                    <input type='text' onChange={this.handleAuthor}/>
                                    <h4>Description</h4>
                                    <input type='text' onChange={this.handleDescription}/>
                                    <h4>Book image URL</h4>
                                    <input type='text' onChange={this.handleUrl}/>
                                </div>
                                <div className="media-right align-self-center">
                                <a href="#" className="btn btn-default" onClick={this.insertBook}>Add Book</a>
                                </div>
                            </div>
                            </form>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.books.map(book =>
                                    <div className="col-md-10 offset-md-1 row-block" key={book.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={book.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{book.name}</h4>
                                                        <h4>{book.author}</h4>
                                                        <p>{book.description}</p>
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
export default Books;