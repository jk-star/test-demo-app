import Card from './css-component/Card';
const CourseCard = ({name, duration}) => {
    return(
        <Card className='green-border'>
            <div className='card-title'>
                <h1 className='title green-text'>Course card</h1>
            </div>
            <div className='card-content'>
                <p><strong>Name : </strong><span>{name}</span></p>
                <p><strong>Age : </strong><span>{duration}</span></p>
            </div>
        </Card>
    );
}

export default CourseCard;