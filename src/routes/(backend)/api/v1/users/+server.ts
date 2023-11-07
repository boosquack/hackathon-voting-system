import { Users } from '@server/mongoDb/MongoDBProvider';
import { json, type RequestHandler } from '@sveltejs/kit';
import { responseGenerator } from '@utils/index';

export const GET: RequestHandler = async () => {
	const users = await Users.findAllUsers();

	return json(responseGenerator(users));
};
