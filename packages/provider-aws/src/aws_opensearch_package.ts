import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpensearchPackageArgsPackageSource {
  s3_bucket_name: string;
  s3_key: string;
}
export interface AwsOpensearchPackageArgs {
  package_description?: string;
  package_name: string;
  package_type: string;
  package_source: AwsOpensearchPackageArgsPackageSource;
}
export class aws_opensearch_package extends TerraformResource {
  readonly available_package_version!: string;
  readonly id?: string;
  readonly package_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchPackageArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_package");
  }
}