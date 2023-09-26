
const UserCard = ({user, deleteUser, setInfoUpdate}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setInfoUpdate(user)
    }

  return (
    <article className="container2">
        <h3 className="titulo1">{`${user.first_name} ${user.last_name}`}</h3>
        
            <li><span className="spn1">Email <br /></span>
            <span className="spn2">{user.email}</span></li>
            <li><span className="spn1">Birthday <br /> </span>
            <span className="spn2">{user.birthday}</span></li>
        
        <button className="btn1" onClick={handleDelete}>Delete</button>
        <button className="btn2" onClick={handleEdit}>Edit</button>
    </article>
    
  )
}
export default UserCard