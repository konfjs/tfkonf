import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointsmsvoicev2OptOutListArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_pinpointsmsvoicev2_opt_out_list extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointsmsvoicev2OptOutListArgs) {
    super(config, "resource", args, resourceName, "aws_pinpointsmsvoicev2_opt_out_list");
  }
}
