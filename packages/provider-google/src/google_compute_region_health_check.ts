import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionHealthCheckArgsGrpcHealthCheck {
  grpc_service_name?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
}
export interface GoogleComputeRegionHealthCheckArgsHttp2HealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface GoogleComputeRegionHealthCheckArgsHttpHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface GoogleComputeRegionHealthCheckArgsHttpsHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}
export interface GoogleComputeRegionHealthCheckArgsLogConfig {
  enable?: boolean;
}
export interface GoogleComputeRegionHealthCheckArgsSslHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}
export interface GoogleComputeRegionHealthCheckArgsTcpHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}
export interface GoogleComputeRegionHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  name: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  grpc_health_check: GoogleComputeRegionHealthCheckArgsGrpcHealthCheck;
  http2_health_check: GoogleComputeRegionHealthCheckArgsHttp2HealthCheck;
  http_health_check: GoogleComputeRegionHealthCheckArgsHttpHealthCheck;
  https_health_check: GoogleComputeRegionHealthCheckArgsHttpsHealthCheck;
  log_config: GoogleComputeRegionHealthCheckArgsLogConfig;
  ssl_health_check: GoogleComputeRegionHealthCheckArgsSslHealthCheck;
  tcp_health_check: GoogleComputeRegionHealthCheckArgsTcpHealthCheck;
  timeouts: GoogleComputeRegionHealthCheckArgsTimeouts;
}
export class google_compute_region_health_check extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionHealthCheckArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_health_check");
  }
}