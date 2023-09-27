import { TableContainer, TableRow, TableCell } from "@mui/material"

const TableSpecification = (props) => {
    console.log(props);
    return(
        <TableContainer sx={{marginTop:'30px'}}>
         {props.product.categories === 'mouse' ?   
            <TableContainer>
            {props.product.specyfikacja.liczbaprzyciskow ? <TableRow sx={{border:'2px solid black'}}><TableCell >Typ myszy</TableCell><TableCell>{props.product.specyfikacja.typmyszy}</TableCell></TableRow> : null }
            {props.product.specyfikacja.interfejs ? <TableRow sx={{border:'2px solid black'}}><TableCell >Interfejs</TableCell><TableCell>{props.product.specyfikacja.interfejs}</TableCell></TableRow> : null }
            {props.product.specyfikacja.dlprzewodu ? <TableRow sx={{border:'2px solid black'}}><TableCell >Długość przewodu</TableCell><TableCell>{props.product.specyfikacja.dlprzewodu}</TableCell></TableRow> : null }
            {props.product.specyfikacja.łączność ? <TableRow sx={{border:'2px solid black'}}><TableCell >Łączność</TableCell><TableCell>{props.product.specyfikacja.łączność}</TableCell></TableRow> : null }
            {props.product.specyfikacja.liczbaprzyciskow ? <TableRow sx={{border:'2px solid black'}}><TableCell >Liczba przycisków</TableCell><TableCell>{props.product.specyfikacja.liczbaprzyciskow}</TableCell></TableRow> : null }
            {props.product.specyfikacja.sensor ? <TableRow sx={{border:'2px solid black'}}><TableCell >Sensor</TableCell><TableCell>{props.product.specyfikacja.sensor}</TableCell></TableRow> : null }
        </TableContainer> : null}
        {props.product.categories === "keyboard" ? <TableContainer>
        {props.product.specyfikacja.typ ?  <TableRow><TableCell>Typ</TableCell><TableCell>{props.product.specyfikacja.typ}</TableCell></TableRow> : null }
        {props.product.specyfikacja.dłprzewodu ?  <TableRow><TableCell>Długość przewodu</TableCell><TableCell>{props.product.specyfikacja.dłprzewodu}</TableCell></TableRow> : null }
        {props.product.specyfikacja.długość ?  <TableRow><TableCell>Długość</TableCell><TableCell>{props.product.specyfikacja.długość}</TableCell></TableRow> : null }
        {props.product.specyfikacja.interfejs ?  <TableRow><TableCell>Interfejs</TableCell><TableCell>{props.product.specyfikacja.interfejs}</TableCell></TableRow> : null }
        {props.product.specyfikacja.klawiszemultifunkcyjne ?  <TableRow><TableCell>Klawisze multifunkcyjne</TableCell><TableCell>{props.product.specyfikacja.klawiszemultifunkcyjne}</TableCell></TableRow> : null }
        {props.product.specyfikacja.podświetlenieklawiszy ?  <TableRow><TableCell>Podświetlenie klawiszy</TableCell><TableCell>{props.product.specyfikacja.podświetlenieklawiszy}</TableCell></TableRow> : null }
        {props.product.specyfikacja.szerokość ?  <TableRow><TableCell>Szerokość</TableCell><TableCell>{props.product.specyfikacja.szerokość}</TableCell></TableRow> : null }
        {props.product.specyfikacja.wysokość ?  <TableRow><TableCell>Wysokość</TableCell><TableCell>{props.product.specyfikacja.wysokość}</TableCell></TableRow> : null }
        {props.product.specyfikacja.łączność ?  <TableRow><TableCell>Łączność</TableCell><TableCell>{props.product.specyfikacja.łączność}</TableCell></TableRow> : null }
        </TableContainer> : null}
        {props.product.categories === "mousepad"  ? <TableContainer>
        {props.product.specyfikacja.grubość ? <TableRow><TableCell>Grubość</TableCell><TableCell>{props.product.specyfikacja.grubość}</TableCell></TableRow> : null }
        {props.product.specyfikacja.materiał ? <TableRow><TableCell>Materiał</TableCell><TableCell>{props.product.specyfikacja.materiał}</TableCell></TableRow> : null }
        {props.product.specyfikacja.szerokość ? <TableRow><TableCell>Szerokość</TableCell><TableCell>{props.product.specyfikacja.szerokość}</TableCell></TableRow> : null }
        {props.product.specyfikacja.wysokość ? <TableRow><TableCell>Wysokość</TableCell><TableCell>{props.product.specyfikacja.wysokość}</TableCell></TableRow> : null }
        </TableContainer> : null}
        {props.product.categories === "headphones"  ? <TableContainer>
        {props.product.specyfikacja.czsłuchawek ? <TableRow><TableCell>Częstotliwość słuchawek</TableCell><TableCell>{props.product.specyfikacja.czsłuchawek}</TableCell></TableRow> : null }
        {props.product.specyfikacja.odłączanymikrofon ? <TableRow><TableCell>Odłączany mikrofon</TableCell><TableCell>{props.product.specyfikacja.odłączanymikrofon}</TableCell></TableRow> : null}
        {props.product.specyfikacja.pasmoprzenoszeniasłuchawek ? <TableRow><TableCell>Pasmo przenoszenia słuchawek</TableCell><TableCell>{props.product.specyfikacja.pasmoprzenoszeniasłuchawek}</TableCell></TableRow> : null }
        {props.product.specyfikacja.wbudowanymikrofon ? <TableRow><TableCell>Wbudowany mikrofon</TableCell><TableCell>{props.product.specyfikacja.wbudowanymikrofon}</TableCell></TableRow> : null }
        {props.product.specyfikacja.łączność ? <TableRow><TableCell>Łączność</TableCell><TableCell>{props.product.specyfikacja.łączność}</TableCell></TableRow> : null }
        {props.product.specyfikacja.śrmembrany ? <TableRow><TableCell>Średnica membrany</TableCell><TableCell>{props.product.specyfikacja.śrmembrany}</TableCell></TableRow> : null }
        </TableContainer> : null}
       </TableContainer>
    )

}

export default TableSpecification