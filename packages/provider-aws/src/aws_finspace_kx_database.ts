import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFinspaceKxDatabaseArgs {
  description?: string;
  environment_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_finspace_kx_database extends TerraformResource {
  readonly arn!: string;
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_modified_timestamp!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_database");
  }
}