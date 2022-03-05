import {
    Box, Stack, Image, Heading, HStack, Text, Divider, Spacer, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";


const getBorderCountry = async (country) => {
    // let result = []

    let res = await 
        fetch(`https://restcountries.com/v3.1/alpha/${country}`)
            let data = await res.json()
                console.log(data)
            //    result.push(data)

    // console.log('result', result)
    return data
}

export default function Country({ country }) {

    const [ border, setBorder] = useState([])
    console.log('bbbbbb',border)


    useEffect(() => {
       let fn = country[0].borders.map(bord => getBorderCountry(bord))
       setBorder(fn)
       console.log('borderfm', fn)
    }, [])


    console.log(country,country)
    return (
        <Box as={'section'}>
            <Nav />
            <Stack mt={10} w={'full'} direction={'row'} >
                <Flex mx={5} direction={'column'} alignItems='center' justifyContent={'center'} flex={1} shadow='md' h='30%' >
                    <Image src={country[0].flags.png}></Image>
                    <Heading mt={5}>{ country[0].name?.common }</Heading>
                    <Text mt={5}>{ country[0].continents?.[0] }</Text>
                    <HStack mt={6}>

                        <Flex direction={'column'} justifyContent='center' alignItems={'center'}>
                            <Heading size={'md'} >{ country[0].population }</Heading>
                            <Text>Population</Text>
                        </Flex>
                        <Spacer />
                        <Flex direction={'column'} justifyContent='center' alignItems={'center'}>
                            <Heading size={'md'} >{ country[0].area }</Heading>
                            <Text>Area(Km)</Text>
                        </Flex>
                    </HStack>
                </Flex>

                <Box shadow={'md'} direction={'column'} flex={2} px={10}>
                    <Heading size={'md'}> Details </Heading>
                    <Divider />
                    <HStack mt={5}> <Text color='gray.500'>Capital</Text> <Spacer /> <Heading size={'md'} > { country[0].capital[0] } </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Subregion</Text> <Spacer /> <Heading size={'md'} > {country[0].subregion}</Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500' >Languages</Text> <Spacer /> <Heading size={'md'} > {country[0].languages[Object.keys(country[0].languages)[0]]} {country?.[1]?.languages[Object.keys(country[0].languages)[0]]} </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Currencies</Text> <Spacer /> <Heading size={'md'} >  {country[0].currencies[Object.keys(country[0].currencies)[0]].name} </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Officcial Name</Text> <Spacer /> <Heading size={'md'} > { country[0].name.official } </Heading>
                    </HStack>

                    <HStack mt={5}> <Text color='gray.500'>Gini</Text> <Spacer /> 
                    
                        <Flex>
                            <Slider aria-label='slider-ex-5' value={country[0].gini?.[Object.keys(country[0].gini)[0]]} colorScheme='teal' mx={5} >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                            <Spacer />
                            <Text> {country[0].gini?.[Object.keys(country[0].gini)[0]]}%</Text>

                        </Flex>
                    </HStack>
                    <Divider h={2} />
                        <Text mt={7} color='gray.500'>Neighbouring Countries</Text>

                    <HStack justifyContent={'flex-start'} alignItems='flex-start' mt={5} >
                        {
                            
                            border.length > 0 ?
                            border.map(country => {
                                return (
                                    <Box key={country.name}>
                                            <Image src={country.flags?.png}></Image>
                                            <Heading size={'sm'}>{country.name?.common}</Heading>
                                        </Box>
                                    )
                                }
                                ): ''
                            


                        }
                       
                    </HStack>


                </Box>
            </Stack>
        </Box>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
    const country = await res.json()
    console.log(country)
    console.log(id)
    return {
        props: {
            country
        }
    }
}
