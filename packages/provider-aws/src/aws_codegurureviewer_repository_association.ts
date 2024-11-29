import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails {
  encryption_option?: string;
  kms_key_id?: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsrepositorybitbucket {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsrepositorycodecommit {
  name: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsrepositoryGithubEnterpriseServer {
  connection_arn: string;
  name: string;
  owner: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsrepositoryS3Bucket {
  bucket_name: string;
  name: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgsrepository {
  bitbucket: AwsCodegurureviewerRepositoryAssociationArgsrepositorybitbucket;
  codecommit: AwsCodegurureviewerRepositoryAssociationArgsrepositorycodecommit;
  github_enterprise_server: AwsCodegurureviewerRepositoryAssociationArgsrepositoryGithubEnterpriseServer;
  s3_bucket: AwsCodegurureviewerRepositoryAssociationArgsrepositoryS3Bucket;
}
export interface AwsCodegurureviewerRepositoryAssociationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodegurureviewerRepositoryAssociationArgs {
  tags?: {
    [key: string]: string;
  };
  kms_key_details: AwsCodegurureviewerRepositoryAssociationArgsKmsKeyDetails;
  repository: AwsCodegurureviewerRepositoryAssociationArgsrepository;
  timeouts: AwsCodegurureviewerRepositoryAssociationArgstimeouts;
}
export class aws_codegurureviewer_repository_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly connection_arn!: string;
  readonly id?: string;
  readonly name!: string;
  readonly owner!: string;
  readonly provider_type!: string;
  readonly s3_repository_details!: any[];
  readonly state!: string;
  readonly state_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodegurureviewerRepositoryAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_codegurureviewer_repository_association");
  }
}