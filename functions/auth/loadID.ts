import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { dbHelper } from '../utils';

const loadID = async (event: HandlerEvent): Promise<HandlerResponse> => {
  try {
    const { client, q } = dbHelper();

    let loadQuery = await client.query(
      q.CurrentIdentity()
    )
      .then(async (res: any) => res.id);
    return {
      statusCode: 200,
      body: JSON.stringify({ id: loadQuery })
    };
  } catch (err: any) {
    return {
      statusCode: 200,
      body: JSON.stringify({ isAuthenticated: false })
    };
  }
};

export default loadID;
