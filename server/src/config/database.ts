import { createClient } from '@clickhouse/client';
import { ENV } from './env';

export const clickhouseClient = createClient({
    url: ENV.CLICKHOUSE_URL,
});
