import './ProfileAndDate.css'


interface ProfileAndDateProps {
    image: string;
    name: string;
    date: string;
}

export default function ProfileAndDate({image, name, date}: ProfileAndDateProps) {

    return (
        <div className="profile-and-date-container">
            <img src={image} alt={name} />
            <div className="profile-and-date-info">
                <h2 className={"manrope-Medium text-size-13 letter-spacing-012 text-color-grey-900"}>{name}</h2>
                <p className={"manrope-Regular text-size-13 letter-spacing-012 text-color-grey-400"}>{date}</p>
            </div>
        </div>
    )

}