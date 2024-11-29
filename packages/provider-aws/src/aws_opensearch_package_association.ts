import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchPackageAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsOpensearchPackageAssociationArgs {
  domain_name: string;
  package_id: string;
  timeouts?: AwsOpensearchPackageAssociationArgsTimeouts;
}
export class aws_opensearch_package_association extends TerraformResource {
  readonly id?: string;
  readonly reference_path!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchPackageAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_package_association");
  }
}