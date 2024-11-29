import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServiceDiscoveryInstanceArgs {
  attributes: {
    [key: string]: string;
  };
  instance_id: string;
  service_id: string;
}
export class aws_service_discovery_instance extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_service_discovery_instance");
  }
}