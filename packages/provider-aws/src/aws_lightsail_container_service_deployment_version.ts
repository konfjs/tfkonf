import { TerraformConfig, TerraformResource } from "tfs";
export interface Container {
  command?: string[];
  container_name: string;
  environment?: {
    [key: string]: string;
  };
  image: string;
  ports?: {
    [key: string]: string;
  };
}
export interface HealthCheck {
  healthy_threshold?: number;
  interval_seconds?: number;
  path?: string;
  success_codes?: string;
  timeout_seconds?: number;
  unhealthy_threshold?: number;
}
export interface PublicEndpoint {
  container_name: string;
  container_port: number;
  health_check: HealthCheck;
}
export interface Timeouts {
  create?: string;
}
export interface AwsLightsailContainerServiceDeploymentVersionArgs {
  service_name: string;
  container: Container;
  public_endpoint: PublicEndpoint;
  timeouts: Timeouts;
}
export class aws_lightsail_container_service_deployment_version extends TerraformResource {
  readonly created_at!: string;
  readonly id?: string;
  readonly state!: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailContainerServiceDeploymentVersionArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_container_service_deployment_version");
  }
}