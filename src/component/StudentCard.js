import Card from './css-component/Card';
const StudentCard = ({name, age}) => {
    return (
        <Card className='blue-border'>
            <div className='card-title'>
                <h1 className='title blue-text'>student card</h1>
            </div>
            <div className='card-content'>
                <p><strong>Name : </strong><span>{name}</span></p>
                <p><strong>Age : </strong><span>{age}</span></p>
            </div>
        </Card>
    );
}
export default StudentCard;