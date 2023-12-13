function PlaceDetailView({locationInfo}) {
    return(
        <>
        <h3>{locationInfo.data?.[0].city}</h3>
        <p>{locationInfo.data?.[0].country}</p>
        <p>{locationInfo.data?.[0].from + " - " + locationInfo.data?.[0].to} </p>
        <p>{locationInfo.data?.[0].info}</p>
        </>
    )
}

export default PlaceDetailView