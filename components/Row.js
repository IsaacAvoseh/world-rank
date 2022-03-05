import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Img,
    Text,
    HStack,
    Input,
   Slider,  
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Flex,
   Spacer
} from '@chakra-ui/react'
import Link from 'next/link'


export default function Row({ country }) {
    // const { population } = country
    // console.log(country.g[Object.keys(country.gini)[0]])
    
  return (   
      <Tbody>
          <Link href={`/${country?.name?.common}`} >
          <Tr bg={'white'}
          transition='all 0.2s ease-in-out'
           _hover={{
             transform: 'scale(1.02)',
             borderBottom: '1px solid #E5E5E5',
          }}>
                 
                  <Td>
                      <HStack><Img w={'50px'} h='37px' src={country?.flags?.png}></Img> <Text>{country?.name?.common}</Text>
                  </HStack></Td>
                  <Td>{country.population}</Td>
                  <Td> {country.area} </Td>
                  <Td>
                      <Flex>
                          <Slider aria-label='slider-ex-1' value={country?.gini?.[Object.keys(country?.gini)[0]]} colorScheme='teal' mx={5} >
                              <SliderTrack>
                                  <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                          </Slider>
                          <Spacer />
                          <Text> {country.gini?.[Object.keys(country.gini)[0]]}%</Text>

                      </Flex>
                  </Td>
          </Tr>
          </Link>
             
          </Tbody>
     
  )
}

