/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2019-10-18 16:58:20
 */
import { Service, Autowired, logger, Base, BaseApp } from "koatty";
import { UserModel } from "../model/UserModel";
import { TestModel } from "../model/TestModel";
import { Connection } from "typeorm";

interface App extends BaseApp {
    connection: any;
}

@Service()
export class TestService extends Base {
    app: App;
    private connection: Connection;
    @Autowired()
    private userModel: UserModel;

    init() {
        this.connection = this.app.connection;
    }


    /**
     * 使用thinkorm查询
     *
     * @returns
     * @memberof TestService
     */
    public sayHello() {
        return this.userModel.find();
    }

    /**
     * 使用typeorm active record模式查询
     *
     * @param {string} param
     * @returns
     * @memberof TestService
     */
    async sayHello2(param: string) {
        logger.info('TestService.sayHello2', param);
        return TestModel.findOne();
    }

    /**
     * 使用typeorm repository模式查询
     *
     * @returns
     * @memberof TestService
     */
    async sayHello3() {
        const testRepository = this.connection.getRepository(TestModel);
        console.log('aaa');

        return testRepository.findOne();
    }

    /**
     * 使用typeorm QueryBuilder查询
     *
     * @returns
     * @memberof TestService
     */
    async sayHello4() {
        const testRepository = this.connection.getRepository(TestModel);
        return testRepository.createQueryBuilder().addOrderBy("id", "ASC").andWhere(" id = '1' ");
    }
}