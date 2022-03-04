import { Search2Icon } from "@chakra-ui/icons";
import { BiSort } from "react-icons/bi";
import { Box, Container, InputGroup, Stack, InputLeftElement, Input, Text, HStack, Spacer, Table, Thead, Th, Tr, Tbody, Divider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Row from "../components/Row";


const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return countries.sort((a, b) => a.population - b.population);
  }
  return countries.sort((a, b) => b.population - a.population);
};


// const orderBy = (countries) => {
//   return countries.sort((a, b) => {
//     a.population > b.population ? 1 : -1;
//   });
// };
export default function Country( { countries } ) {
   console.log('countries', countries)

   const orderByCountry = orderBy(countries, 'asc')



  return (
    <Box as={'section'} minH='100vh' overflow={'hidden'} bg='#E5E5E5' >
      <Nav />
    <Stack>
        <HStack m={10}> <Text color={'gray.400'}>Found { countries.length } countries</Text> 
        <Spacer/>
         <InputGroup w={'30%'}>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input type='text' placeholder='Search by Name, Region and Subregion' variant={'filled'}/>
        </InputGroup>
        
        </HStack>

    </Stack>
    <Box m={10}>
      <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th><HStack><Text>Name</Text> <BiSort /></HStack></Th>
              <Th><HStack><Text>Population</Text> <BiSort /> </HStack></Th>
              <Th><HStack><Text>Area(km)</Text><BiSort /></HStack></Th>
              <Th><HStack><Text>Gini</Text><BiSort /> </HStack></Th>
            </Tr>
          </Thead>
          
        
         {
           countries?.map(country => {
           
          
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
