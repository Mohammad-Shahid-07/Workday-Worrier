import "./Avatar.css"
const Avatar = ({src}) => {
    return ( 
        <div className="avatar">
            <img src={src} alt="pic" />
        </div>
     );
}
 
export default Avatar;