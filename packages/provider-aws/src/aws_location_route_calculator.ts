import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLocationRouteCalculatorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLocationRouteCalculatorArgs {
  calculator_name: string;
  data_source: string;
  description?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsLocationRouteCalculatorArgsTimeouts;
}
export class aws_location_route_calculator extends TerraformResource {
  readonly calculator_arn!: string;
  readonly create_time!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationRouteCalculatorArgs) {
    super(config, "resource", args, resourceName, "aws_location_route_calculator");
  }
}