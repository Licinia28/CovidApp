function CountriesStats(props) {
    console.log(props)
    return(
        <div>
            <table>
                <tr>
                    <th>Country name</th>
                    <th> Active cases</th>
                </tr>

                {props.countries.map((country) => (
                    <tr key={country.id}>
                        <td>{country.Country}</td>
                        <td>{country.TotalConfirmed}</td>
                        <td>{country.NewConfirmed}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default CountriesStats;