import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/action";

class Postform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    submitHAndler = event => {
        event.preventDefault();
        const { title } = this.state

        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost);
        this.setState({ title: '' });

    }
    chahngeInputHeindler = event => {
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }
    render() {
        return (
            <form onSubmit={this.submitHAndler}>
                <div className="mb-3">
                    <label className="form-label">Ведите текст</label>
                    <input type="text" className="form-control" id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.chahngeInputHeindler} />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispachToprops = {
    createPost 
}

export default connect(null, mapDispachToprops)(Postform);