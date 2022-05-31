import { useState, useEffect, useCallback } from "react";
import { createClient } from "urql";

const APIURL = "https://gateway.thegraph.com/api/4a9e65101157a153eb60a1cd010cdf3b/subgraphs/id/D7azkFFPFT5H8i32ApXLr34UQyBfxDAfKoCEK4M832M6"

// Get MATIC value in USDC
const query = `
    query {
        tokens(
            where: {
                symbol: "MATIC"
            }
        ){
            basePairs {
                token1 {
                    id
                    name
                }
            token1Price
            }
        }
    }
`

const client = createClient({
    url: APIURL
})

const useGraphValues = ( ) => {

    const [ tokenPrice, setTokenPrice ] = useState<string>("0");

    const getGraphValues = useCallback(async () => {
        const response = await client.query(query).toPromise();
        const price = response.data.tokens[0].basePairs[2].token1Price
        const slicedPrice = price.slice(0, 5)
        setTokenPrice(slicedPrice);
    }, []);

    useEffect(() => {
        getGraphValues()
            .catch(console.error);
    }, [getGraphValues, tokenPrice]);

    return { tokenPrice };
}

export default useGraphValues;