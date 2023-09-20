import { getPokemons } from "../services/getPokemons"
import { PokemonTypes } from "../../src/globalTypes/pokemon"
import { Box, Button, Container, Flex, Input, Text, View } from "native-base"
import React, { Fragment, useState } from "react"
import { useQuery } from "react-query"
import { PokemonCard } from "../components/PokemonCard"
import { Image } from "react-native"

interface APITypes {
    results: PokemonTypes[]
}

export const Home = () => {

    const [pokemonsLimit, setPokemonsLimit] = useState(10)
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])

    const { data: pokemons, isLoading, isError, refetch } = useQuery<APITypes>(['pokemons', pokemonsLimit], async () => getPokemons(pokemonsLimit))

    const pokemonsGetMore = () => {
        setPokemonsLimit((prev) => prev + 10)
        setPokemonsFiltered([])
        refetch()
    }

    const pokemonsSearchFilter = (search: string) => {
        const filtered: any = pokemons?.results.filter((pokemon) => {
            return pokemon.name.includes(search)
        })
        setPokemonsFiltered(filtered)
    }

    return (
        <View>
            <Box bg={"brand.900"}>
                <Container>
                    <Flex flexDir="column" alignItems="center" justifyContent={"center"} w="100%">
                        <Image style={{ width: 190, height: 50 }} source={require("/assets/logo.svg")} alt="" />
                        {/* <Input bg="white" placeholder="Pesquisar..." onChange={(event) => pokemonsSearchFilter(event.target.value)} /> */}
                    </Flex>
                </Container>
            </Box>
            <Container>
                <Flex py="12" flexDir={"row"} flexWrap="wrap">
                    {pokemonsFiltered.length > 0 ? (
                    pokemonsFiltered.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} index={index} loading={isLoading} />)
                ): pokemons?.results.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} index={index} loading={isLoading} />)}
                </Flex>
                <Box>
                    {isError && <Text>Ocorreu algum erro, tente novamente mais tarde</Text>}
                </Box>
            </Container>
            <Box pb="8">
                <Container>
                    <Button w="full" bg="brand.900" color="white" _hover={{ bg: "brand.800" }} >{isLoading ? "Carregando..." : "Carregar mais"}</Button>
                </Container>
            </Box>
        </View>
    )
}