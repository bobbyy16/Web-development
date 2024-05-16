/* Creating an elastic search client */

import { Client } from '@elastic/elasticsearch'

/* Initialize elastic search client */
const client: Client = new Client({node: 'http://localhost:9200'});

