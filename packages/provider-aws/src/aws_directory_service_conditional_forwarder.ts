import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDirectoryServiceConditionalForwarderArgs {
  directory_id: string;
  dns_ips: string[];
  remote_domain_name: string;
}
export class aws_directory_service_conditional_forwarder extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceConditionalForwarderArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_conditional_forwarder");
  }
}