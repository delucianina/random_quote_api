import { Router, Request, Response } from 'express';
import axios from 'axios';
const router = Router();

const people = [
    {
        id: 1,
        name: 'Nina'
    },
    {
        id: 2,
        name: 'Sarah'
    },
    {
        id: 3,
        name: 'Bob'
    }
];

// Get person by ID; the coloon makes it dynamic 
router.get('/api/person/:personID', (requestObj: Request, responseObj: Response) => {
    const person = people.find((personObj) => {
        if (personObj.id == Number(requestObj.params.personID)) {
            return personObj;
        }

        return false;
    });

    responseObj.json(person || {
        message: 'ID not assigned'
    });
});





// random quote GET route 
router.get('/api/quote', async (requestObj: Request, responseObj: Response): Promise<any> => {
    // console.log(requestObj.query);

    if (!requestObj.query.cat) {
        return responseObj.json({
            message: 'You must provide a category'
        });
    };

    const url = `https://api.api-ninjas.com/v1/quotes?category=${requestObj.query.cat}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
    
        // console.log(res.data);
    
        responseObj.json({
            quote: res.data[0].quote
        });
    } catch(error) {
        responseObj.json({
            message: 'You must provide an existing category'
        });
    }
});

export default router;


