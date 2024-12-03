import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodeartifactDomainArgs {
  domain: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_codeartifact_domain extends TerraformResource {
  readonly arn!: string;
  readonly asset_size_bytes!: string;
  readonly created_time!: string;
  readonly encryption_key?: string;
  readonly id?: string;
  readonly owner!: string;
  readonly repository_count!: number;
  readonly s3_bucket_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodeartifactDomainArgs) {
    super(config, "resource", args, resourceName, "aws_codeartifact_domain");
  }
}