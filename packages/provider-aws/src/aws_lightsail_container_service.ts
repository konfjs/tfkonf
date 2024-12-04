import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailContainerServiceArgsPrivateRegistryAccessEcrImagePullerRole {
  is_active?: boolean;
}

export interface AwsLightsailContainerServiceArgsPrivateRegistryAccess {
  ecr_image_puller_role: AwsLightsailContainerServiceArgsPrivateRegistryAccessEcrImagePullerRole;
}

export interface AwsLightsailContainerServiceArgsPublicDomainNamesCertificate {
  certificate_name: string;
  domain_names: string[];
}

export interface AwsLightsailContainerServiceArgsPublicDomainNames {
  certificate: AwsLightsailContainerServiceArgsPublicDomainNamesCertificate;
}

export interface AwsLightsailContainerServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLightsailContainerServiceArgs {
  is_disabled?: boolean;
  name: string;
  power: string;
  scale: number;
  tags?: { [key: string]: string };
  private_registry_access: AwsLightsailContainerServiceArgsPrivateRegistryAccess;
  public_domain_names: AwsLightsailContainerServiceArgsPublicDomainNames;
  timeouts?: AwsLightsailContainerServiceArgsTimeouts;
}

export class aws_lightsail_container_service extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly power_id!: string;
  readonly principal_arn!: string;
  readonly private_domain_name!: string;
  readonly resource_type!: string;
  readonly state!: string;
  readonly tags_all?: { [key: string]: string };
  readonly url!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailContainerServiceArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_container_service");
  }
}
