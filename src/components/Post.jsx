export default function Post(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <button onClick={() => props.onDeletePost(props.id)}>Delete post {props.id}</button>
        </div>
    )
}