import { PokemonTypes } from "../globalTypes/pokemon"
import { getPokemonImage } from "../services/getPokemonImage"
import { Link } from "@react-navigation/native"
import { ArrowRight } from "lucide-react"
import { Box, Flex, Skeleton, Text } from "native-base"
import { Image, StyleSheet } from "react-native"

export interface PokemonCardProps {
    loading?: boolean,
    pokemon: PokemonTypes,
    index: number
}

const styles = StyleSheet.create({
    pokemon: {
        width: 66,
        height: 58,
    },
});

export const PokemonCard = ({ loading, pokemon, index }: PokemonCardProps) => {
    return (
        <Link key={index} to={`/pokemon/${pokemon.name}`} style={{ width: "50%" }}>
            <Box shadow={"8"} borderStyle={"solid"} borderColor={"gray.500"} maxH="240px" display="flex" role="group" flexDir="column" rounded="lg" alignItems="center" p="4">
                <Box>
                    <Image style={styles.pokemon} source={{ uri: `${getPokemonImage(index + 1)}` }} />
                </Box>
                <Flex w="full" flexDir="row" justifyContent="space-between">
                    <Text fontSize='sm'>{pokemon?.name}</Text>
                    <ArrowRight strokeWidth={1.75} />
                </Flex>
            </Box>
        </Link>
    )
}