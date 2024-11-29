import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedaccessInstanceArgs {
  description?: string;
  fips_enabled?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_verifiedaccess_instance extends TerraformResource {
  readonly creation_time!: string;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly verified_access_trust_providers!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_instance");
  }
}