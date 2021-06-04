import { Container, Typography } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import HighlightCard from "./components/HighlightCard";
import Summary from "./components/Summary";
import '@fontsource/roboto';
import 'moment/locale/vi';

moment.locale('vi');

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, 'Country');
      setCountries(countries);

      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );

      //call api
      getReportByCountry(Slug).then((res) => {
        // delete last item in array (not correct realtime data)
        res.data.pop();

        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <Container style={{marginTop: 20}}>
      <Typography variant="h2" component="h2">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <HighlightCard report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId}/>
    </Container>
  );
}

export default App;
