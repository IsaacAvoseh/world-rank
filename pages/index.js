import { Search2Icon } from "@chakra-ui/icons";
import { BiSort } from "react-icons/bi";
import { Box, Container, InputGroup, Stack, InputLeftElement, Input, Text, HStack, Spacer, Table, Thead, Th, Tr, Tbody, Divider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Row from "../components/Row";
import { useState, useRef } from "react";


const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1);
  }
    return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1);
}

// const orderBy = (countries) => {
//   return countries.sort((a, b) => {
//     a.population > b.population ? 1 : -1;
//   });
// };

export default function Country( { countries } ) {
  const [ countryList, setCountryList] = useState(countries);

  if (typeof window !== "undefined") {

    localStorage.setItem('countries', JSON.stringify(countries))

  }
  const [ keyword, setKeyword ] = useState("")
  const inputRef = useRef(null)


  const searchByKeyword = (keyword) => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))
    setCountryList(filtered)
  }

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value)
    searchByKeyword(e.target.value)
  }


   console.log('countries', countries)

   const orderByGini = () => {
     console.log('orderByGini')
     let newSort = orderBy(countries, countries.gini, 'asc')
    console.log('New Sort' ,newSort)
  return setCountryList(newSort)  
}

const orderByPopulation = () => {
  console.log('orderByPopulation')
  let newSort = orderBy(countries, countries.population, 'asc')
  console.log('New Sort' ,newSort)
return setCountryList(newSort)
}

const orderByArea = () => {
  console.log('orderByArea')
  let newSort = orderBy(countries, countries.area, 'asc')
  console.log('New Sort' ,newSort)
return setCountryList(newSort)
}

const orderByName = () => {
  console.log('orderByName')
  let newSort = orderBy(countries, countries?.name?.common, 'desc')
  console.log('New Sort', countries?.name ,newSort)
return setCountryList(newSort)
}

    

  return (
    <Box as={'section'} minH='100vh' overflow={'hidden'} bg='#E5E5E5' >
      <Nav />
    <Stack>
        {/* <a href="tel:+6494461709">Telephone</a> */}
        <HStack m={10}> <Text color={'gray.400'}>Found { countries.length } countries</Text> 
        <Spacer/>
         <InputGroup w={'30%'}>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
            <Input type='text' ref={inputRef} autoFocus='autoFocus' onChange={handleKeywordChange} value={keyword} placeholder='Search by Name, Region and Subregion' variant={'filled'}/>
        </InputGroup>
        
        </HStack>

    </Stack>
    <Box m={10}>
      <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th><HStack><Text>Name</Text> <BiSort onClick={orderByName} size={'15px'} /></HStack></Th>
              <Th><HStack><Text>Population</Text> <BiSort onClick={orderByPopulation} /> </HStack></Th>
              <Th><HStack><Text>Area(km)</Text><BiSort  onClick={ orderByArea } /></HStack></Th>
              <Th><HStack><Text>Gini</Text><BiSort onClick={orderByGini} /> </HStack></Th>
            </Tr>
          </Thead>
          
        
         {
           countryList?.slice(0, 15).map(country => {
           
          
             return (<>
               <Row country={country} />
               <Divider h={5} />
             </>)
           }
            )

         }
          {/* <Row image={'/country/india.png'} gini={30} name={'India'} population={'1,439,323,776'} area={'9, 388, 211'} ></Row> 
          <Divider h={5} />
          <Row image={'/country/us.png'} gini={100} name={'USA'} population={'1,439,323,776'} area={'9,388,211	'} ></Row> 
    */}
      </Table>
    </Box>

       </Box>
    )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()
  console.log(' getting countries', countries)

  return {
    props: {
      countries
    }
  }
}
