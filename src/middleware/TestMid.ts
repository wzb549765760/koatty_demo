/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2019-10-18 16:13:43
 */
import { Middleware, helper, logger } from "koatty";
const defaultOpt = {
    //默认配置项
};


@Middleware()
export class TestMid {
    run(options: any, app: any) {
        options = helper.extend(defaultOpt, options);
        //应用启动执行一次
        // app.once('appReady', () => { });

        return function (ctx: any, next: any) {
            logger.info('test middleware');
            return next();
        };
    }
}