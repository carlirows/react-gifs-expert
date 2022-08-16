import { render, screen } from "@testing-library/react"
import { getGifs } from "../../src/helpers/getGifs"

describe('prubeas eb getGifs()', () => { 
    test('debe retornar un arreglo de gifs',async() => {
        const gifs = await getGifs('one punch')
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
 })